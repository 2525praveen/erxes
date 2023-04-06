import { MutationVariables, QueryResponse } from '@erxes/ui/src/types';

import { IUser } from '@erxes/ui/src/auth/types';

// query types
export interface IFolder {
  _id: string;
  name: string;
  order: string;
  hasChild?: boolean;
  createdAt?: Date;
  createdUserId?: string;
  parentId?: string;
  parent?: IFolder;
  sharedUsers: IUser[];
}

export interface IFile {
  _id: string;
  name: string;
  type: string;
  contentType?: string;
  contentTypeId?: string;
  createdAt?: Date;
  createdUserId?: string;
  documentId?: string;
  folderId: string;
  url: string;
  info: {
    name: string;
    size: number;
    type: string;
  };
  permissionUnitId: string;
  permissionUserIds: string[];
  relatedFileIds: string[];
  relatedFiles: IFile[];
  sharedUsers: IUser[];
}

// query types
export type FilemanagerFoldersQueryResponse = {
  filemanagerFolders: IFolder[];
} & QueryResponse;

export type FilemanagerFilesQueryResponse = {
  filemanagerFiles: IFile[];
} & QueryResponse;

// mutation types
export type SaveFilemanagerFolderMutationVariables = {
  _id?: string;
  name: string;
  parentId?: string;
};

export type SaveFileMutationVariables = {
  name: string;
  type: string;
  folderId: string;
  url?: string;
  contentType: string;
  contentTypeId: string;
  documentId: string;
};

export type RelateFileMutationVariables = {
  sourceId: string;
  targetIds: string[];
};

export type RemoveFilemanagerFolderMutationResponse = {
  removeMutation: (params: { variables: MutationVariables }) => Promise<void>;
};

export type RemoveFileMutationResponse = {
  removeFileMutation: (params: {
    variables: MutationVariables;
  }) => Promise<void>;
};

export type SaveFilemanagerFolderMutationResponse = {
  saveMutation: (params: {
    variables: SaveFilemanagerFolderMutationVariables;
  }) => Promise<void>;
};

export type SaveFileMutationResponse = {
  saveFileMutation: (params: {
    variables: SaveFileMutationVariables;
  }) => Promise<void>;
};

export type RelateFileMutationResponse = {
  relateFileMutation: (params: {
    variables: RelateFileMutationVariables;
  }) => Promise<void>;
};
