import mongoose, { model, Model, Schema} from "mongoose";
import { IUserDocument } from "../interfaces/userDocument.interface";

const userSchema: Schema = new Schema({
    authId: { type: mongoose.Schema.Types.ObjectId, ref :'Auth'},
  profilePicture: { type: String, default:''},
  postCount: { type: Number, default: 0 },
  followersCount: { type: Number, default : 0 },
  followingCount: { type: Number, default : 0 },
  bloked: [{ type: mongoose.Schema.Types.ObjectId,ref:'user' } ],
  blokedBy: [{ type: mongoose.Schema.Types.ObjectId,ref:'user' } ],
  notifications: {
    messages: { type: Boolean, default: true},
    reactions: { type: Boolean, default: true},
    comments: { type: Boolean, default: true},
    follows: { type: Boolean, default: true},
  },

  social: {
    facebook: { type: Boolean, default: ''},
    instagram: { type: Boolean, default: ''},
    twitter: { type: Boolean, default: ''},
    youtube: { type: Boolean, default: true}
  },
  work: { type: String, default: ''},
  school: { type: String, default: ''},
  location: { type: String, default: ''},
  quote: { type: String, default: ''},
  bgImageVersion: { type: String, default: ''},
  bgImageId: { type: String, default: ''}

});

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema, 'User');
export {UserModel};