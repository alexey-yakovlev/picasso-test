import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { nextPage, setIsEnding } from '@/store/counterPageSlice';
import { PostsList, useGetPostsQuery } from '@/features/posts';

import './index.css'
 
export const PostsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { activePage, isEnding } = useSelector(({ counterPage }: RootState) => counterPage);
  const { data: posts = [], error, isFetching } = useGetPostsQuery(activePage);
 
  const postsLengthRef = useRef<number>();
  const loaderMarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (postsLengthRef.current == posts.length && !isFetching) {
      dispatch(setIsEnding())
      return;
    }

    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting && !isFetching) {
        postsLengthRef.current = posts.length;
        dispatch(nextPage());
      }
    };

    const observer = new IntersectionObserver(onIntersection);
    if (observer && loaderMarkRef.current) {
      observer.observe(loaderMarkRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [posts.length, dispatch, isFetching]);

  if (error) return <div>Произошла ошибка при загрузке...</div>;

  return (
    <div className='main'>
      <PostsList posts={posts}/>
      {isEnding ? <div>Получены все посты</div> : <div ref={loaderMarkRef}>Загрузка...</div>}
    </div>
  );
};