#! /usr/bin/env node

import fetch from 'node-fetch';
import yargs from 'yargs';
import open from 'open';

const { argv } = yargs(process.argv);
const res = await fetch('https://reddit.com/.json');
const data = await res.json();
const children = data.data.children;

const randomIdx = Math.floor(Math.random() * children.length);
const post = children[randomIdx];
const subr = post.data.subreddit_name_prefixed;
const link = `https://reddit.com${post.data.permalink}`;
if (argv.print || argv.p || argv.P) {
  console.log(`
    title : ${post.data.title},
    link : ${link}
    sub_reddit : ${subr}
  `);
} else {
  open(link);
}
