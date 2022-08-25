Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :update] do
      resources :listings, only: [:index]
    end
    
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:index, :show, :create, :update, :destroy] do
      resources :notes, only: [:show, :destroy, :create, :update]
    end
    resources :saved_listings, only: [:index, :show, :destroy, :create]
  end

end