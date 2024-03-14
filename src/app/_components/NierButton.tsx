import { twMerge } from "tailwind-merge"

type ValidTag = "button" | "a" | "div"

type Props<Tag extends keyof JSX.IntrinsicElements> = {
  as?: ValidTag
  children?: React.ReactNode
  className?: string
} & JSX.IntrinsicElements[Tag]

/**
 * Make the default tag a constant to make it easy to infer both the default
 * generic parameter and the `tag` prop
 */
const DEFAULT_TAG = "button" as const

// Use the default `div` tag for both the generic parameter and `tag` prop
const NierButton = <T extends keyof JSX.IntrinsicElements>({
  as = DEFAULT_TAG,
  children,
  className,
  ...args
}: Props<T>) => {
  const Wraper = as
  return (
    <Wraper
      className={twMerge(
        "relative z-0 cursor-pointer whitespace-nowrap bg-nier-400 p-2 text-center font-helvetica text-base text-nier-700 shadow-md transition duration-200 before:absolute before:inset-0 before:z-[1] before:border-transparent before:transition-all before:duration-200 before:content-[''] after:absolute after:bottom-0 after:left-0 after:top-0 after:-z-[1] after:w-0 after:bg-nier-700 after:transition-all after:duration-200 after:content-[''] hover:bg-transparent hover:text-nier-200 before:hover:-bottom-1 before:hover:-top-1 before:hover:border-y-[0.1rem] before:hover:border-nier-700 after:hover:w-full active:text-nier-700 after:active:bg-nier-200",
        className,
      )}
      {...args}
    >
      {children}
    </Wraper>
  )
}

export default NierButton
