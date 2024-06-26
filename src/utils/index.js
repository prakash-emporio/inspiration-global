import { axiosInstance } from "../config/axiosInstance";

export function getHomepage() {
  return axiosInstance.get("/get-homepage-content");
}

export function getSoftwarePage(slug) {
  return axiosInstance.get(`/software/${slug}`);
}

export function getServicePage(slug) {
  return axiosInstance.get(`/services/${slug}`);
}

export function getTalentPage(slug) {
  return axiosInstance.get(`/talent/${slug}`);
}

export function getIndustryPage(slug) {
  return axiosInstance.get(`/industry/${slug}`);
}

export function getAllBlogs() {
  return axiosInstance.get("/get-all-posts");
}

export function getBlogPage(slug) {
  return axiosInstance.get(`/get-post-detail/${slug}`);
}

export function getCaseStudyPage(slug) {
  return axiosInstance.get(`/case_study/${slug}`);
}

export function getAboutUsPage() {
  return axiosInstance.get("/get-aboutpage-content");
}

export function getContactUsPage() {
  return axiosInstance.get("/get-contactpage-content");
}

export function getPolicyPage() {
  return axiosInstance.get("/get-deipolicy-page-content");
}
