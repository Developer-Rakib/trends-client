import React from 'react';
import './Blogs.css'
import { Fade } from "react-reveal"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';



const Blogs = () => {
    return (

        <div className=''>

            <h2 className="text-3xl sm:text-5xl py-8">Question & Answer</h2>
            <Accordion className='blog-contaner'>

                <Fade left>
                    <AccordionItem className='my-2'>
                        <AccordionItemHeading className='border inline-block rounded px-5'>
                            <AccordionItemButton>
                                <h4 className='text-lg sm:text-2xl'>What is Context API?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='inline-block rounded py-'>
                                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Fade>

                <Fade right>
                    <AccordionItem className='my-2'>
                        <AccordionItemHeading className='border inline-block rounded px-5'>
                            <AccordionItemButton>
                                <h4 className='text-lg sm:text-2xl'>What Is Semantic HTML Tag?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='inline-block rounded py-'>
                                HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer.Because the web was not initially built to be designed, programmers used different hacks to get things laid out in different ways. Rather than using the table tag describe information using a table, programmers would use them to position other elements on a page.As the use of visually designed layouts progressed, programmers started to use a generic “non-semantic” tag like div.They would often give these elements a class or id attribute to describe their purpose.As HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Fade>

                <Fade bottom>
                    <AccordionItem className='my-2'>
                        <AccordionItemHeading className='border inline-block rounded px-5'>
                            <AccordionItemButton>
                                <h4 className='text-lg sm:text-2xl'>What is The Difference Between Inline & Inline Block Elements?</h4>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='inline-block rounded py-'>
                                Inline The element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height. inline-block It's formatted just like the inline element, where it doesn't start on a new line. BUT, you can set width and height values.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Fade>


            </Accordion>
        </div>

    );
};

export default Blogs;