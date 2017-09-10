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
  if request.xhr?
    content_type :json
    {votes: post.points}.to_json
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
  post = Post.find_by(id: params[:id])
  post.destroy
  if request.xhr?
  else
    redirect '/'
  end
end

post '/posts' do
  @post = Post.create( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if request.xhr?
    erb :'partials/_post'
  else
    redirect '/posts'
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
