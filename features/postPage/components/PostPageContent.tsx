'use client';

import { LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import usePostDetails from '../hooks/usePostDetails';
import imageMock from '../images/post_img_mock.webp';

export default function PostPageContent() {
  const params = useParams();
  const id = Number(params.id);

  const { post, isLoading } = usePostDetails(id);

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <LoaderCircle size={48} className="animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg text-zinc-600">Post not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 md:mb-10">
        <h2 className="mb-6 text-3xl font-bold">{post.title}</h2>
        <p>
          Cras commodo, massa nec tempor posuere, sapien risus porttitor risus,
          vitae maximus dui felis sed mi. Maecenas rutrum malesuada urna, in
          luctus metus fringilla ac. Cras commodo, massa nec tempor posuere,
          sapien risus porttitor risus.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="mb-4 font-bold">Lorem ipsum</h3>
        <p className="text-lg text-zinc-600">{post.body}</p>
      </div>
      <div className="mb-10">
        <Image
          className="rounded-diagonal-lg max-h-[500px] min-h-96"
          src={imageMock}
          alt="Image mock"
          width={1024}
          height={744}
          style={{ objectFit: 'cover', objectPosition: '10% 10%' }}
        />
      </div>
    </div>
  );
}
