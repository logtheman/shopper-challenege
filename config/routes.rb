Rails.application.routes.draw do
  post   '/login',   to: 'sessions#new'
  delete '/logout',  to: 'sessions#destroy'
  resources :applicants

end
