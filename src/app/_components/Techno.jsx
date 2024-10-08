"use client"
import React, { useState } from 'react';
import Project from './Projet';


import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const Techno = ({ data = [] }) => {
  const dataPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage - 1); 
  };

  const offset = currentPage * dataPerPage;
  const currentPageData = data.slice(offset, offset + dataPerPage);
  const pageCount = Math.ceil(data.length / dataPerPage);

  return (
    <section className="max-[640px]:h-[338vh] max-[970px]:h-[389vh] min-[640px]:pt-[10%] max-[640px]:mt-[75%]" id="projects">
      <div className="text-center bg-gradient-to-r from-yellow-300 to-red-700 bg-clip-text text-transparent">
        <h1>Mes Projets</h1>
      </div>

      <div className="flex justify-around flex-wrap p-[3%] ml-[-1%] mt-[5%] h-[85rem]">
        {currentPageData.map((projectData) => (
            <Project key={projectData.id} proj={projectData} />
        ))}
      </div>

      <div className="flex justify-center mt-[-4rem]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(Math.max(currentPage, 0));
                }}
              />
            </PaginationItem>

            {[...Array(pageCount)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === index}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(Math.min(currentPage + 2, pageCount));
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Techno;
