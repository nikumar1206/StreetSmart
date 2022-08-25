# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  realtor         :boolean          default(FALSE)
#  name            :string
#  phone           :string
#

class User < ApplicationRecord
    attr_reader :password
    before_validation :ensure_session_token
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true} 

    has_many :listings, class_name: "Listing", foreign_key: "lister_id"
    has_many :saves, class_name: "Save", foreign_key: "user_id"
    has_many :notes, class_name: "Note", foreign_key: "user_id"

    has_many :saved_listings, through: :saves, source: :listing


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
