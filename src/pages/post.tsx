import React from 'react';
import { useParams } from 'react-router-dom';

import { PostDetail, useGetPostByIdQuery } from '@/features/post'

export const PostPage: React.FC = () => {
  const { postId } = useParams();

  const { data, isFetching, error } = useGetPostByIdQuery(Number(postId));

  if (isFetching) return <div>Загрузка...</div>;

  if (error || !data) return <div>Что-то пошло не так...</div>;

  return (
    <PostDetail post={data} />
  );
};