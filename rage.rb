require 'sinatra'
require 'susy'

helpers do
  def h(text)
    Rack::Utils.escape_html(text)
  end
end

get '/' do
  slim :index
end

get '/style.css' do
  sass :style
end
