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
<<<<<<< HEAD
  if request.xhr?
    post.votes.length.to_s
=======
  vote_count = post.votes.length.to_s
  if request.xhr?
    vote_count
>>>>>>> 9efff3fdc7aa60506cf84ec60a7ca674e3f57561
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
<<<<<<< HEAD
  if request.xhr?
    Post.find_by(id: params[:id]).destroy
    "complete"
  else
    redirect '/posts'
=======
  Post.find(params[:id]).destroy
  if request.xhr?
    puts "hi"

  else
    redirect "/posts"
>>>>>>> 9efff3fdc7aa60506cf84ec60a7ca674e3f57561
  end
end

post '/posts' do
<<<<<<< HEAD
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
=======
  post = Post.create( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if request.xhr?
    erb :"_article", layout: false, locals: { post: post }
  else
    redirect '/posts'
  end
>>>>>>> 9efff3fdc7aa60506cf84ec60a7ca674e3f57561
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
