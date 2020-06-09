import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { filter, map, concatAll } from "rxjs/operators";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.less"]
})
export class RxjsComponent implements OnInit {
  user = [
    {
      id: 888,
      name: "JerryHong",
      courseLists: [
        {
          name: "My Courses",
          courses: [
            {
              id: 511019,
              title: "React for Beginners",
              coverPng:
                "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
              tags: [{ id: 1, name: "JavaScript" }],
              rating: 5
            },
            {
              id: 511020,
              title: "Front-End automat workflow",
              coverPng:
                "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
              tags: [
                { id: 2, name: "gulp" },
                { id: 3, name: "webpack" }
              ],
              rating: 4
            }
          ]
        },
        {
          name: "New Release",
          courses: [
            {
              id: 511022,
              title: "Vue2 for Beginners",
              coverPng:
                "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
              tags: [{ id: 1, name: "JavaScript" }],
              rating: 5
            },
            {
              id: 511023,
              title: "Angular2 for Beginners",
              coverPng:
                "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
              tags: [{ id: 1, name: "JavaScript" }],
              rating: 4
            }
          ]
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {
    console.log("this.userArr--");
    of(this.user)
      .pipe(
        map(userArr =>
          userArr.map(item =>
            item.courseLists.map(v => v.courses.filter(a => a.rating === 5))
          )
        ),
        concatAll()
      )
      .subscribe(res => console.log("res", res));

    let arr = [];
    const arr1 = this.user[0].courseLists.map(items =>
      items.courses.filter(v => v.rating === 5)
    );
    console.log("arr1==", arr1);
  }
}
