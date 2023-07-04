import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courses } from 'src/app/data/courses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  selectedAgeGroup = 'All';
  selectedCourseType = 'All';
  courseList = courses;

  filterCourses(age: any, type: any) {

    // if (age !== 'All') {
    //   const filteredCourses = courses.filter(
    //     (course) => course.ageGroup === age
    //   );
    //   this.courseList = filteredCourses;
    // } else {
    //   this.courseList = courses;
    // }

    if (age !== 'All' || type !== 'All') {
      if (age === 'All') {
        const filteredCourses = courses.filter(
          (course) => course.type === type
        );
        this.courseList = filteredCourses;
      } else if (type === 'All') {
        const filteredCourses = courses.filter(
          (course) => course.ageGroup === age
        );
        this.courseList = filteredCourses;
      } else {
        const filteredCourses = courses.filter(
          (course) => course.ageGroup === age && course.type === type
        );
        this.courseList = filteredCourses;
      }
    } else {
      this.courseList = courses;
    }
  }

  onFilterChange() {
    this.filterCourses(this.selectedAgeGroup, this.selectedCourseType);
  }

  enrollForm() {
    window.open('https://forms.gle/uYg2kXydpiwY83xp8');
  }
}
