class Api::NotesController < ApplicationController
    def show
        @note = Note.find(params[:id])
    end


    def create
        @listing = Listing.find_by(id: params[:listing_id])
        @note = Note.new(notes_params)
        @note.user = current_user
        @note.listing = @listing
        if @note.save
            @listing = Listing.find_by(id: params[:listing_id])
            p "rrrrr"
            p @listing
            render "api/listings/show"
        else
            render json: @note.errors.full_messages, status: 422
        end
    end


    def update
        @note = Note.find_by(user_id: current_user.id, listing_id: params[:listing_id])
        if @note.update(notes_params)
            @listing = Listing.find_by(id: params[:listing_id])
            render "api/listings/show"
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = Note.find_by(user_id: current_user.id, listing_id: params[:listing_id])
        if @note.destroy
            @listing = Listing.find_by(id: params[:listing_id])
            render "api/listings/show"
        else
            render json: ["Sorry, we couldn't find what you were looking for"], status: 404
        end
    end

    private
    def notes_params
        params.require(:note).permit(:listing_id, :body)
    end
end

