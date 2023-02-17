import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileImg',
      title: 'profile image',
      type: 'string',
    }),
    defineField({
      name: 'tweet',
      title: 'Tweet',
      type: 'reference',
      to: {
        type: 'tweet',
      },
    }),
  ],
})
