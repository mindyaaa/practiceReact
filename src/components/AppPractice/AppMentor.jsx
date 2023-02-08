import React, { useState } from 'react';
import { useImmer } from 'use-immer';

export default function AppMentor() {
  const [person, updatePerson] = useImmer({
    name: '엘리',
    title: '개발자',
    mentors: [
      {
        name: '밥',
        title: '시니어개발자',
      },
      {
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  });

  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    updatePerson((person) => {
        const mentor = person.mentors.find((p) => p.name === prev);
        mentor.name = current;
    })

  };
  const handleAdd = () => {
    const name = prompt('새로 추가할 이름?');
    const title = prompt('직책은?');
    updatePerson((person) => {
        person.mentors.push({name, title})
    })
  };
  const handleDelete = () => {
    const nameToDelete = prompt('삭제 원하는 이름?');
    updatePerson((person) => {
        person.mentors = person.mentors.filter((p) => p.name !== nameToDelete);
    })
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={handleChange}
      >
        멘토의 이름을 바꾸기
      </button>

      <button 
      onClick={handleAdd}
      >멘토 추가하기</button>
      <button
      onClick={handleDelete}
      >멘토 삭제하기</button>
    </div>
  );
}
