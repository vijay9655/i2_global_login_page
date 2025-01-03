import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

// Reusable Breadcrumb component
export const CustomBreadcrumbs = ({ items }) => {
  return (
    <Breadcrumbs style={{padding:"1.5%", fontSize:"14px",color:""}}>
      {items.map((item, index) => (
        <BreadcrumbItem style={{color:index==0?"pink":"black"}} separator={<span>/</span>} key={index}>{item}</BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};