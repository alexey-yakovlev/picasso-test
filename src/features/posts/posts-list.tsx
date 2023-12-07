import React, { forwardRef} from 'react'
import { useNavigate } from 'react-router-dom';
// import { FixedSizeList, ListChildComponentProps } from 'react-window';

import type { PostType } from '@shared/types';

type Props = {
  posts: PostType[];
  // ref: ForwardedRef<HTMLDivElement>;
};

export const PostsList: React.FC<Props> = forwardRef(({ posts }) => {
  const navigate = useNavigate();

  // const Row = ({ index, style }: ListChildComponentProps) => {
  //   return (
  //     <div style={style}>
  //       <div className='post' key={posts[index]?.id}>
  //         <h4>{posts[index]?.id}. {posts[index]?.title}</h4>
  //         <p className='preview'>{posts[index]?.body}</p>
  //         <button onClick={() => navigate(`/post/${posts[index]?.id}`)}>Просмотр</button>
  //         {/* {index === posts.length - 1 ? <div ref={data}>Загрузка...</div> : null} */}
  //       </div>
  //     </div>
  //   )
  // };

  return (
    // <>
    //   <FixedSizeList
    //     height={window.innerHeight}
    //     itemCount={posts.length}
    //     itemData={ref}
    //     itemSize={100}
    //     width={800}
    //   >
    //     {Row}
    //   </FixedSizeList>
    // </>
      <>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <h4>{post.id}. {post.title}</h4>
            <p className='preview'>{post.body}</p>
            <button onClick={() => navigate(`/post/${post.id}`)}>Просмотр</button>
          </div>
        ))}
      </>
  )
});
