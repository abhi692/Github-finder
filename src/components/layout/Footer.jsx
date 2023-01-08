function Footer() {
    const footerYear = new Date().getFullYear

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100pt" height="40pt" version="1.1" viewBox="0 0 600 600">
                <g fill-rule="evenodd">
                <path d="m427.9 285.7c-2.0234-1.7539-4.7383-2.5-7.3984-1.9688l-22.305 4.3125c-1.3828 0.26563-2.8164 0-3.9922-0.79687-1.1719-0.79688-1.9688-2.0234-2.2344-3.4102l-6.1211-31.723c-0.26562-1.3867 0-2.8203 0.79688-3.9922 0.79688-1.1719 2.0234-1.9688 3.4102-2.2344l25.125-4.8438c3.9375-0.74609 6.8672-4.0977 7.082-8.0898 0.16016-2.7148-0.95703-5.2734-2.9805-7.0234-2.0234-1.7578-4.7383-2.5039-7.3984-1.9727l-25.125 4.8438c-2.875 0.53125-5.6953-1.3281-6.2305-4.2031l-4.8945-25.234c-0.74609-3.9375-4.0977-6.8672-8.0898-7.0781-2.7148-0.16016-5.2734 0.95703-7.0234 2.9805-1.7578 2.0234-2.5039 4.7383-1.9727 7.3984l4.8984 25.23c0.26563 1.3828 0 2.8203-0.79687 3.9922-0.79688 1.1719-2.0234 1.9688-3.4102 2.2344l-31.723 6.1211c-1.3867 0.26562-2.8203 0-3.9922-0.79688-1.1719-0.79688-1.9688-2.0234-2.2383-3.4062l-4.8398-25.125c-0.74609-3.9375-4.0977-6.8672-8.0898-7.0781-2.7148-0.16016-5.2734 0.95703-7.0273 2.9805s-2.5 4.7383-1.9688 7.4023l4.8438 25.125c0.53125 2.875-1.3281 5.6953-4.207 6.2266l-25.23 4.8945c-3.9375 0.74609-6.8672 4.1016-7.082 8.0938-0.16016 2.7109 0.95703 5.2695 2.9805 7.0234 2.0234 1.7539 4.7383 2.5 7.3984 1.9688l25.23-4.8945c1.3828-0.26562 2.8203 0 3.9922 0.79688s1.9688 2.0195 2.2344 3.4062l6.1211 31.723c0.53125 2.875-1.3281 5.6953-4.207 6.2266l-25.125 4.8438c-3.9375 0.74609-6.8672 4.0977-7.0781 8.0898-0.16016 2.7109 0.95703 5.2695 2.9805 7.0234 2.0234 1.7539 4.7383 2.5 7.3984 1.9688l25.125-4.8438c0.31641-0.054688 0.6875-0.10938 1.0078-0.10938 2.5 0 4.7383 1.7578 5.2148 4.3125l5.375 27.52c0.74609 3.9414 4.1016 6.8672 8.0938 7.0781 2.7109 0.16016 5.2695-0.95703 7.0234-2.9805 1.7578-2.0195 2.5-4.7383 1.9688-7.3984l-5.3789-27.52c-0.26562-1.3867 0-2.8203 0.79688-3.9922 0.79687-1.1719 2.0234-1.9688 3.4102-2.2383l31.723-6.1211c1.3867-0.26562 2.8203 0 3.9922 0.79688 1.1719 0.79688 1.9727 2.0234 2.2383 3.4102l4.8438 25.125c0.74609 3.9375 4.0977 6.8672 8.0898 7.082 2.7148 0.16016 5.2734-0.95703 7.0273-2.9805 1.7539-2.0234 2.5-4.7383 1.9688-7.3984l-4.8438-25.125c-0.53125-2.8789 1.332-5.6992 4.207-6.2305l22.301-4.3086c3.9375-0.74609 6.8672-4.0977 7.082-8.0898 0.10938-2.6562-0.95703-5.2148-2.9805-7.0273zm-57.273 7.7188-31.723 6.1211c-0.32031 0.054688-0.69141 0.10938-1.0078 0.10938-1.0664 0-2.0781-0.32031-2.9805-0.90625-1.1719-0.79688-1.9688-2.0195-2.2344-3.4062l-6.1211-31.723c-0.53125-2.875 1.3281-5.6953 4.2031-6.2305l31.723-6.1211c1.3828-0.26562 2.8203 0 3.9922 0.79688 1.1719 0.79687 1.9688 2.0234 2.2344 3.4102l6.1211 31.723c0.53125 2.875-1.332 5.6406-4.2031 6.2266z"/>
                <path d="m353.7 129.47c-79.207 0-143.61 64.406-143.61 143.61 0 45.461 20.867 87.297 57.223 114.71 1.4922 1.1172 2.2891 2.9805 2.0742 4.8945l-5 41.734 48.012-22.41c1.1172-0.53125 2.4492-0.63672 3.6211-0.31641 12.242 3.3008 24.91 5 37.633 5 79.207 0 143.61-64.406 143.61-143.61s-64.352-143.61-143.56-143.61zm87.773 163.89c-0.47656 8.8867-6.918 16.285-15.648 17.992l-17.086 3.3008 3.832 19.906c1.1172 5.9102-0.47656 11.871-4.418 16.395-3.9414 4.5234-9.6328 6.9219-15.648 6.5977-8.8867-0.47656-16.285-6.918-17.992-15.648l-3.832-19.906-21.238 4.0977 4.3633 22.301c1.1172 5.9102-0.47656 11.871-4.418 16.395-3.7266 4.2578-8.9922 6.6523-14.582 6.6523-0.37109 0-0.69141 0-1.0664-0.054687-8.8867-0.47656-16.289-6.9219-17.992-15.648l-4.3633-22.305-19.91 3.8359c-5.9062 1.1133-11.867-0.48047-16.391-4.418s-6.918-9.6328-6.6016-15.648c0.48047-8.8867 6.918-16.285 15.648-17.988l19.906-3.8359-4.0977-21.238-20.016 3.8867c-5.9062 1.1719-11.871-0.47656-16.395-4.418-4.5234-3.9375-6.918-9.6328-6.5977-15.648 0.47656-8.8867 6.918-16.289 15.648-17.992l20.016-3.8867-3.832-19.906c-1.1172-5.9102 0.47656-11.871 4.418-16.395 3.9375-4.5234 9.6328-6.918 15.648-6.5977 8.8867 0.47656 16.289 6.918 17.992 15.648l3.832 19.906 21.238-4.0977-3.8828-20.012c-1.1172-5.9102 0.47656-11.871 4.418-16.395 3.9414-4.5234 9.6367-6.918 15.648-6.6016 8.8867 0.48047 16.285 6.918 17.992 15.648l3.8828 20.012 19.91-3.832c5.9062-1.1133 11.871 0.48047 16.395 4.418s6.918 9.6367 6.5977 15.648c-0.47656 8.8906-6.918 16.289-15.648 17.992l-19.91 3.832 4.0977 21.238 17.086-3.3008c5.9102-1.1172 11.871 0.47656 16.395 4.418 4.5273 3.9414 6.9219 9.6328 6.6016 15.648z"/>
                <path d="m209.07 447.57c0 17.637-14.301 31.934-31.938 31.934s-31.938-14.297-31.938-31.934c0-17.641 14.301-31.938 31.938-31.938s31.938 14.297 31.938 31.938"/>
                <path d="m554.8 101.79c0 11.758-9.5352 21.293-21.293 21.293-11.758 0-21.293-9.5352-21.293-21.293 0-11.762 9.5352-21.293 21.293-21.293 11.758 0 21.293 9.5312 21.293 21.293"/>
                </g>
            </svg>
            <p>Copyright &copy; {footerYear} All rights reserved.</p>
        </div>     
    </footer>
  )
}

export default Footer;