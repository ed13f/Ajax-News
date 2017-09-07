get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

post '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)

  @total_votes = post.votes.count

  if JSON::JSON_LOADED
    puts "JSON::JSON_LOADED"
  end


  if request.xhr?
    erb :'partials/_votes', layout: false
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
  # write logic for deleting posts here.
end

post '/posts' do
  Post.create( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  redirect '/posts'
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
