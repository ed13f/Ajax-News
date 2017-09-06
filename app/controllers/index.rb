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
    # @post.points.to_s // version 2 you would take off `.points` in response in the .done method in the js file.
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
  @post = Post.create(title: params[:title], username: Faker::Internet.user_name, comment_count: rand(1000))
  if @post.save
    status 200
    if request.xhr?
      content_type :json
      { post: (erb :'/partials/_post', locals: {post: @post}, layout: false) }.to_json
    else
      redirect '/posts'
    end
  else
    status 422
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
