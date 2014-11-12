SpaApp::Application.routes.draw do
  resources :todos
  root to: 'todos#index'
  # get '/todos', to: 'todos#index', as: 'todos'
  # post '/todos', to: 'todos#create'
  # patch "/todos/:id", to: "todos#update"
  # delete '/todos/:id', to: 'todos#destroy'
end
