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
    post.votes.count.to_s
  else
    redirect '/posts'
  end
end

delete '/posts/:id' do
  # write logic for deleting posts here.
  post = Post.find(params[:id])
  post.destroy
end


post '/posts' do
  @post = Post.new(title: params[:title],username: Faker::Internet.user_name,comment_count: rand(1000))
  if @post.save
    status 200
    if request.xhr?
       erb :'partials/_article', locals: {post: @post}, layout: false
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
