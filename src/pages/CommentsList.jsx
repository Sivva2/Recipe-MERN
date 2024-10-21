import axios from "axios";
import Comment from "./Comment";

const CommentsList = ({ recipeId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/recipes/${recipeId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error("Error fetching comments", error));
  }, [recipeId]);

  const handleCommentUpdated = (updatedComment) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === updatedComment._id ? updatedComment : comment
      )
    );
  };

  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment._id}
          commentData={comment}
          onCommentUpdated={handleCommentUpdated}
        />
      ))}
    </div>
  );
};

export default CommentsList;
