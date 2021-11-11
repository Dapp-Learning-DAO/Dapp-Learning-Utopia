import React from "react"

type Props = { className?: string; hidden?: boolean }

const Logo = ({ className = ``, hidden = true }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="118 0 150 150"
    aria-hidden={hidden ? `true` : `false`}
    focusable={hidden ? `false` : `true`}
    aria-label={hidden ? `` : `LekoArts Logo`}
    fill="currentColor"
  >
    <g>
        <g>
            {/* <rect className="cls-1" fill="#333" fillOpacity={0} x="122.32" width="145.3" height="149.15" /> */}
            <g id="icon">
                <path className="cls-2" fill="#a5fcf6" d="M178.17,0H122.32V150.44H127L208.53,4.92A132.88,132.88,0,0,0,178.17,0Z" />
                <g>
                    <path className="cls-3" fill="#d0c4fb" d="M178.17,0H166.31L217.7,93.86h47.74a77.47,77.47,0,0,0,2.17-18.64C267.61,1.5,178.17,0,178.17,0Z" />
                </g>
                <g>
                    <path className="cls-4" fill="#81a8f8" d="M158.68,93.86,127,150.44h51.19s73.67-1.24,87.29-56.58Z" />
                </g>
            </g>
        </g>
    </g>
  </svg>
)

export default Logo
