Rails.application.routes.draw do
  post   '/login',   to: 'sessions#new'
  delete '/logout',  to: 'sessions#destroy'

  resources :applicants
  post "/check_email" => "applicants#check_email"

end
