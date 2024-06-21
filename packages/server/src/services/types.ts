import { IUser } from '../models/user'

export interface GetPaginationRequest {
  offset: number
  limit: number
}

export interface TopicResponse {
  id: number
  name: string
  creator: IUser
  comments_count: number
}

export interface CreateTopicRequest {
  name: string
  creator: IUser
}

export interface CreateCommentRequest {
  topicId: number
  content: string
  creator: IUser
}

export interface GetTopicInfo {
  name: string
  comments_count: number
}

export interface CommentAndReplyResponse {
  id: number
  content: string
  creator: IUser
  replies_count: number
}

export interface GetReplyRequest extends GetPaginationRequest {
  replyId: number | null
}

export interface CreateReplyRequest {
  commentId: number
  replyId: number | null
  content: string
  creator: IUser
}
