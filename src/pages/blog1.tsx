import { NextPage } from "next"
import { useMemo, useState } from "react";
import { GetServerSideProps } from 'next'
import {getBlogs} from '../../server/blogs'
import { BlogPost } from '../../types/blog';
import { InferGetServerSidePropsType } from 'next';
import BlogPreview from '@/components/BlogPreview';
import Link from 'next/link'
import NavbarBlog from '@/components/NavbarBlog'
import Head from 'next/head'

const Blog1: NextPage = () => {

  return (
    <>
    <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-100 font-narrow pt-24">
sfd
    </main>
    </>
  )
}

export default Blog1;