const Resume = () => {
  return (
    <>
      <div className="resume-box">
        <div className="resume-heading" id="resume">
          About
        </div>
        <div className="resume-innerbox">
          <div className="resume-left box">
            <p className="education">Education :</p>
            <div className="education-box">
              <p className="circle c-1">&#8226;</p>
              <span>2019-2022</span>
              <p className="college-name">
                VMV College RTMNU University,Nagpur
              </p>
              <p className="degree">Master of Computer Application(MCA)</p>
            </div>
            <div className="education-box">
              <p className="circle c-2">&#8226;</p>
              <span>2015-2018</span>
              <p className="college-name">
                Shri M. Mohata Science College, Nagpur <i></i>
              </p>
              <p className="degree">Bachelor of Science(B.Sc)</p>
            </div>
            <div className="education-box">
              <span>2013 - 2015</span>
              <p className="circle c-3">&#8226;</p>
              <p className="college-name">Shri Niketan Junior College,Nagpur</p>
              <p className="degree">12th(HSC)</p>
            </div>
          </div>
          <div className="resume-right box">
            {/* <img src="./image/resume-guy-img.png" alt="img" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
