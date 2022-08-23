//TODO split up in different files?
/* 
type mArray = import("mongoose").Types.Array<any>;
type mDocumentArray = import("mongoose").Types.DocumentArray<any>;
type mObjectId = import("mongoose").Types.ObjectId;

*/

interface ResponseJson {
  message: string;
  user?: object;
  isAuthenticated?: boolean;
  accessToken?: string;
  image?: string;
  error?: any;
}
