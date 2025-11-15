import { Box, Button, Checkbox, Stack, Typography } from "@mui/material";
import { useState } from "react";

type Article = {
  text: string;
  isBookmarked: boolean;
};

const items = [
  { text: "Learn React", isBookmarked: false },
  { text: "Study Redux Toolkit", isBookmarked: false },
  { text: "Practice TypeScript", isBookmarked: false },
  { text: "Build a custom hook", isBookmarked: false },
  { text: "Write unit tests", isBookmarked: false },
  { text: "Improve UI skills", isBookmarked: false },
  { text: "Read about WebSockets", isBookmarked: false },
  { text: "Try React Query", isBookmarked: false },
  { text: "Optimize components", isBookmarked: false },
  { text: "Refactor old code", isBookmarked: false },
  { text: "Explore MUI", isBookmarked: false },
  { text: "Learn debouncing", isBookmarked: false },
  { text: "Understand throttling", isBookmarked: false },
  { text: "Study performance tips", isBookmarked: false },
  { text: "Review JS concepts", isBookmarked: false },
];

const PAGE_SIZE = 5;

function PaginatedBookmark() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showBookmark, setShowBookmark] = useState<boolean>(false);
  const [articles, setArticles] = useState<Article[]>(items);

  const toggleBookmarked = (index: number) => {
    const newList = articles.map((article: Article, ind: number) =>
      ind === index
        ? { ...article, isBookmarked: !article?.isBookmarked }
        : article
    );

    setArticles(newList);
  };

  // const handlePrev = () => {
  //   setCurrentPage(currentPage - 1);
  // };

  // const handleNext = () => {};

  const handlePageChange = ({ type }: { type: "next" | "prev" }) => {
    type === "prev"
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage + 1);
  };

  const handleShowBookmark = () => {
    setShowBookmark((prev) => !prev);
    showBookmark ? setCurrentPage(1) : showBookmark;
  };

  const filteredArticles = showBookmark
    ? articles.filter((article: Article) => article.isBookmarked === true)
    : articles;
  let startIndex = (currentPage - 1) * PAGE_SIZE;

  const displayArticles = filteredArticles.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE);

  return (
    <>
      <Stack gap={2}>
        {/* header  */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Paginated Bookmark List</Typography>
          <Stack direction={"row"} gap={1}>
            <Checkbox
              checked={showBookmark}
              onClick={() => {
                handleShowBookmark();
              }}
            />
            <Typography
              sx={{
                alignSelf: "center",
              }}
            >
              Show only bookmarked
            </Typography>
          </Stack>
        </Box>

        {/* list  */}
        <Stack gap={1}>
          {displayArticles.map((article: Article, index: number) => (
            <Box
              p={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid black",
              }}
            >
              <Typography>{article?.text}</Typography>
              <Button onClick={() => toggleBookmarked(index)}>
                {article?.isBookmarked ? "B" : "NB"}
              </Button>
            </Box>
          ))}
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={() => handlePageChange({ type: "prev" })}
            disabled={currentPage == 1}
          >
            Prev
          </Button>
          <Typography>{`Page ${currentPage} of ${totalPages}`}</Typography>
          <Button
            onClick={() => handlePageChange({ type: "next" })}
            disabled={currentPage == totalPages}
          >
            Next
          </Button>
        </Box>
      </Stack>
    </>
  );
}

export default PaginatedBookmark;
