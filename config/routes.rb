Rails.application.routes.draw do

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show]
    resources :users, only: [:create, :show, :update] do
      resources :saved_listings, only: [:index, :show, :destroy]
    end
    
  end

end