const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId> - add comment
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId> - add reply or delete comment
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId> - delete reply
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
