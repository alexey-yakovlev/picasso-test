import { useNavigate } from "react-router-dom"

import type { PostType } from "@shared/types"

type Props = {
  post: PostType
};

export const PostDetail: React.FC<Props> = ({ post }) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={handleGoBack}>Назад</button>
    </div>
  )
}
