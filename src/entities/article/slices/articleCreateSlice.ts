import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialStates/articleCreateState';
import {
  createArticleThunk,
  deleteArticleThunk,
  imageUploadThunk,
} from '../thunks/thunk';

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
    },
    setParagraphDescription: (state, action) => {
      const { id, description } = action.payload;
      const paragraph = state.article.paragraph.find((p) => p.id === id);
      if (paragraph) {
        paragraph.description = description;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticleThunk.fulfilled, (state, action) => {
        state.article = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(createArticleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(deleteArticleThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteArticleThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteArticleThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(imageUploadThunk.fulfilled, (state, action) => {
        const { url } = action.payload;
        state.article.image = url;
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
