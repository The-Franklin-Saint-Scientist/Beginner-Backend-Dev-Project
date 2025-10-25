import User from "./users.js";
import Friend from "./friends.js";
import Chat from "./chats.js";

// friend relationships
User.hasMany(Friend, { foreignKey: "üser_id", as: "sentRequests" });
User.hasMany(Friend, { foreignKey: "friend_id", as: "receivedRequests" });
Friend.belongsTo(User, { foreignKey: "user_id", as: "requester" });
Friend.belongsTo(User, { foreignKey: "friend_id", as: "receiver" });

// Chat relationships
User.hasMany(Chat, { foreignKey: "sender_id", as: "chatSender" });
User.hasMany(Chat, { foreignKey: "receiver_id", as: "chatReceiver" });
Chat.belongsTo(User, { foreignKey: "sender_id", as: "chatSendOwner" });
Chat.belongsTo(User, { foreignKey: "receiver_id", as: "chatReceiveOwner" });

export default { User, Friend, Chat };
