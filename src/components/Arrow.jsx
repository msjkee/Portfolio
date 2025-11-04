function Arrow() {
    return(
        <div className={"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-bounce"}>
            <button type="button" className={"cursor-pointer "}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
            </svg></button>
        </div>
    )
}

export default Arrow;