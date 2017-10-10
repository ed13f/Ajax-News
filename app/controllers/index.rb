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
  vote_count = post.votes.length.to_s
  if request.xhr?
    vote_count
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
  Post.find(params[:id]).destroy
  if request.xhr?
    puts "hi"

  else
    redirect "/posts"
  end
end

post '/posts' do
  if params[:title] != ""
    post = Post.create( title: params[:title],
                 username: Faker::Internet.user_name,
                 comment_count: rand(1000) )
    if request.xhr?
      erb :"_article", layout: false, locals: {post: post }
    else
      redirect '/posts'
    end
   end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
