import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { isAxiosError } from 'axios';
import { ImageUploadArticleResult } from '../types/types';

export const createArticleThunk = createAsyncThunk(
  'createArticleThunk',
  async (articleData: Article, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:9000/api/article/create',
        articleData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data || 'Ошибка при создании статьи'
        );
      }
    }
    return rejectWithValue('Ошибка при создании статьи');
  }
);

export const deleteArticleThunk = createAsyncThunk(
  'deleteArticleThunk',
  async (id) => {
    try {
      const res = await axios.delete(`http://localhost:9000/api/delete/${id}`);
      return res.data;
    } catch (error) {
      console.log('test');
    }
  }
);

export const imageUploadThunk = createAsyncThunk<
  ImageUploadArticleResult,
  { imageData: File }
>('imageUploadThunk', async ({ imageData }, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append('image', imageData);

    const res = await axios.post('http://localhost:9000/upload', formData);
    return { url: res.data.url };
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data || 'Ошибка загрузки изображения'
    );
  }
});

export interface ParagraphType {
  id: number;
  description: string;
  title: string;
}

export interface Article {
  title: string;
  image: string;
  paragraph: ParagraphType[];
  author: {
    name: string;
    surname: string;
    id: string;
  };
}

interface Data {
  article: Article;
  error: null | string;
  loading: boolean;
}

const initialStateArticle: Article = {
  title: '',
  image: '',
  paragraph: [
    {
      id: Date.now(),
      title: '',
      description: '',
    },
  ],
  author: {
    name: '',
    surname: '',
    id: '',
  },
};

const initialState: Data = {
  article: initialStateArticle || null,
  loading: false,
  error: null,
};

const articleCreate = createSlice({
  name: 'articleCreate',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.article.title = action.payload;
    },
    addParagraph: (state) => {
      state.article.paragraph.push({
        id: Date.now(),
        title: '',
        description: '',
      });
    },
    removeParagraph: (state, action) => {
      state.article.paragraph = state.article.paragraph.filter(
        (para) => para.id !== action.payload
      );
    },
    setParagraphTitle: (state, action) => {
      const { id, title } = action.payload;
      const paragraph = state.article.paragraph.find((para) => para.id === id);
      if (paragraph) {
        paragraph.title = title;
      }
      console.log(id);
    },
    setParagraphDescription: (state, action) => {
      const { id, description } = action.payload;
      const paragraph = state.article.paragraph.find((p) => p.id === id);
      if (paragraph) {
        paragraph.description = description;
      }
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.article = action.payload;
        state.error = null;
      })
      .addCase(createArticleThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      .addCase(imageUploadThunk.fulfilled, (state, action) => {
        const { url } = action.payload;
        state.article.image = url;
      })

      .addCase(deleteArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteArticleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteArticleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  setTitle,
  addParagraph,
  removeParagraph,
  setParagraphTitle,
  setParagraphDescription,
} = articleCreate.actions;

export default articleCreate.reducer;
