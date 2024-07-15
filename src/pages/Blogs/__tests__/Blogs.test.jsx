import { getAllByRole, render, screen} from '@testing-library/react'
import Blogs from "../Blog";
import "@testing-library/jest-dom"; 
import { describe, it, expect } from 'vitest'

describe("Blogs tests", () => {
    it('Renders the blog section title name', () => {
        render(<Blogs/>)
        const Title = screen.getByRole('heading', { name: /blog/i})
        expect(Title).toBeInTheDocument()
    })
     it("Renders blog title", () => {
       render(<Blogs />);
       const blogsTitle = screen.getAllByRole("title_");
       blogsTitle.forEach((title) => {
       expect(title).toBeInTheDocument();
       })
     });

     it("Renders blog date", () => {
       render(<Blogs />);
       const blogsDate = screen.getAllByRole("paragraph");
       blogsDate.forEach((date) => {
         expect(date).toBeInTheDocument();
       });
     });

      it("Renders blog topics", () => {
        render(<Blogs />);
        const blogsTopics = screen.getAllByText(/Express/i);
        blogsTopics.forEach((topics) => {
          expect(topics).toBeInTheDocument();
        });
      });

       it("Renders blog description", () => {
         render(<Blogs />);
         const blogsDesc = screen.getAllByRole("blog_desc");
         blogsDesc.forEach((desc) => {
           expect(desc).toBeInTheDocument();
         });
       });
})
