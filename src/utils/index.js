import { axiosInstance } from "../config/axiosInstance";

export function getSoftwarePage(slug) {
  return axiosInstance.get(`software/${slug}`);
}

export function getServicePage(slug) {
  return axiosInstance.get(`services/${slug}`);
}

export function getTalentPage(slug) {
  return axiosInstance.get(`talent/${slug}`);
}     

export function getIndustryPage(slug) {
  return axiosInstance.get(`industry/${slug}`);
}

export function getAllBlogs() {
  return axiosInstance.get("get-all-posts");
}

export function getBlogPage(slug) {
  return axiosInstance.get(`insight/blog/${slug}`);
}

export function getCaseStudyPage(slug) {
  return axiosInstance.get(`insight/case-study/${slug}`);
}

export function getAboutUsPage() {
  return axiosInstance.get("about-us");
}

export function getContactUsPage() {
  return axiosInstance.get("contact-us");
}
