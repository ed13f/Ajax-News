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
  @post = Post.find_by(id: params[:id])
  if request.xhr?
    @post.destroy

  else
    @post.destroy

    redirect "/posts"
  end
end

post '/posts' do
  post =  Post.create( title: params[:title],
  username: Faker::Internet.user_name,
  comment_count: rand(1000) )
  if post.save
    if request.xhr?

     erb :_newfile, locals: {post: post}, layout: false

  else
      redirect '/posts'
    end
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
