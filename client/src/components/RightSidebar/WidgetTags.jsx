import React from 'react'

const WidgetTags = () => {

  const tags =['c','css', 'express', 'firebase' ,'html' ,'java', 'javascript','mern','mongodb', 'mysql', 'next.js','php', 'python','reactjs']
  return (
    <div>
      <div className='widget-tags'>
        <h4>Watched tags</h4>
        <div className='widget-tags-div'>
          {
            tags.map((tag) => (
              <p key={tag}>{tag}</p>

            ))
          }

        </div>
      </div>
    </div>
  )
}

export default WidgetTags
