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
    post.votes.length.to_s
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
  if request.xhr?
    Post.find_by(id: params[:id]).destroy
  else
    Post.find_by(id: params[:id]).destroy
    redirect '/posts'
  end
end

post '/posts' do
    post = Post.new( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if request.xhr? && post.save
    status 200
    erb :"_article", layout: false, locals: { post: post }
  else
    status 422
    redirect '/posts'
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
