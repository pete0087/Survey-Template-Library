import { Language } from "../language/Language";
import { Template } from "../template/Template";

export type Content = {
  audioLink: string | null;
  content: string | null;
  contentType?: "Audio" | "Text" | "Html";
  createdAt: Date;
  id: string;
  language?: Language;
  questionTemplates?: Array<Template>;
  status?: "Active" | "Inactive" | "Locked" | "Deleted" | "Archived";
  updatedAt: Date;
};
