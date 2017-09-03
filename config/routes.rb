Rails.application.routes.draw do
  # post   '/login',   to: 'sessions#new'
  # post   '/login',   to: 'sessions#create'
  # delete '/logout',  to: 'sessions#destroy'

  resources :sessions, only: [:new, :create, :destroy]

  resources :applicants

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
