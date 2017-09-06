get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

post '/posts/:id/vote' do
  prep = Post.find(params[:id])
  prep.votes.create(value: 1)
  if request.xhr?
      prep.points.to_s
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
