get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

post '/posts/:id/vote' do
  @post = Post.find(params[:id])
  @post.votes.create(value: 1)
  if request.xhr?
    # post.points.to_s
    content_type :json
    { points: @post.points.to_s }.to_json
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
  @post = Post.find_by(id: params[:id])
  if request.xhr?
    @post.destroy
  else
    @post.destroy
    redirect "/posts"
  end
end

post '/posts' do
  Post.create( title: params[:title], username: Faker::Internet.user_name, comment_count: rand(1000) )
  redirect '/posts'
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
