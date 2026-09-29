import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageSquare, User, Phone, BookOpen, ArrowRight } from 'lucide-react';

const DemoModal = ({ isOpen, onClose, preselectedCourse = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    countryCode: '+880',
    course: preselectedCourse || 'Quran Reading',
    format: 'One-to-One',
    ageGroup: 'Kids (Ages 5-12)',
    preferredTime: 'Evening',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData(prev => ({ ...prev, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const fullPhone = `${formData.countryCode} ${formData.phone}`.trim();
    const whatsappMessage = encodeURIComponent(
      `Assalamu Alaikum! I would like to book a FREE Demo Class at An-Najat Global Islamic Academy Online.\n\n` +
      `👤 Name: ${formData.name}\n` +
      `📱 Contact: ${fullPhone}\n` +
      `📖 Course: ${formData.course}\n` +
      `👥 Format: ${formData.format}\n` +
      `🎯 Age Group: ${formData.ageGroup}\n` +
      `⏰ Preferred Time: ${formData.preferredTime}\n` +
      (formData.notes ? `📝 Note: ${formData.notes}\n` : '') +
      `\nPlease let me know the available demo schedule. Jazakumullahu Khairan!`
    );

    // Open WhatsApp in new tab after 1.2s delay for seamless feedback
    setTimeout(() => {
      window.open(`https://wa.me/8801602261329?text=${whatsappMessage}`, '_blank');
    }, 1200);
  };

  const coursesList = [
    'Quran Reading',
    'Hifz Quran',
    'Pre-Hifz',
    'Tajweed',
    'Arabic',
    'Islamic Studies',
    'Kids Spoken English',
    'Junior Spoken English',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#081e17]/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#e7e5dc] overflow-hidden z-10 transition-all my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-[#0f3b2e] text-[#faf9f5] px-6 py-5 sm:px-8 sm:py-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8a261]/20 text-[#c8a261] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#c8a261]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a261]"></span>
            100% Free Demo Session
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">
            Book Your Free Demo Class
          </h3>
          <p className="text-sm text-emerald-100/80 mt-1 max-w-md">
            Experience our live interactive online classroom. No payment or credit card required.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto bg-[#faf9f5]/50">
          {submitted ? (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 bg-[#0f3b2e]/10 text-[#0f3b2e] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#0f3b2e]/20">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-[#131b18] mb-2 font-serif">
                Demo Request Prepared!
              </h4>
              <p className="text-[#3a4742] text-sm leading-relaxed mb-6 max-w-md mx-auto">
                Opening WhatsApp to connect directly with our academy coordinator at <strong>01602-261329</strong> to confirm your suitable schedule.
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-[#0f3b2e] font-medium text-left max-w-sm mx-auto mb-6 space-y-1.5">
                <p><strong>Student:</strong> {formData.name}</p>
                <p><strong>Course:</strong> {formData.course}</p>
                <p><strong>Format:</strong> {formData.format}</p>
                <p><strong>Age Group:</strong> {formData.ageGroup}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/8801602261329`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f3b2e] hover:bg-[#185a47] text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#c8a261]" />
                  Open WhatsApp Directly
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 border border-[#e7e5dc] bg-white text-[#3a4742] hover:bg-neutral-50 font-medium rounded-xl text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3a4742] mb-1.5">
                  Student / Parent Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Wasik Rahman"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#e7e5dc] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f3b2e] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3a4742] mb-1.5">
                  WhatsApp Contact Number <span className="text-rose-600">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="px-3 py-2.5 text-sm bg-white border border-[#e7e5dc] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f3b2e] text-[#131b18] font-medium"
                  >
                    <option value="+880">🇧🇩 +880 (BD)</option>
                    <option value="+1">🇺🇸 +1 (USA)</option>
                    <option value="+1">🇨🇦 +1 (Canada)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+39">🇮🇹 +39 (Italy)</option>
                    <option value="+966">🇸🇦 +966 (KSA)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                    <option value="+974">🇶🇦 +974 (Qatar)</option>
                    <option value="+965">🇰🇼 +965 (Kuwait)</option>
                    <option value="+968">🇴🇲 +968 (Oman)</option>
                    <option value="+">🌍 Other</option>
                  </select>
                  <div className="relative flex-1">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="01602-261329 or phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#e7e5dc] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f3b2e] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3a4742] mb-1.5">
                  Select Desired Program <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#e7e5dc] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f3b2e] text-[#131b18] font-medium"
                  >
                    {coursesList.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Format & Age Group in Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Learning Format */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3a4742] mb-1.5">
                    Learning Format
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, format: 'One-to-One' })}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-center ${
                        formData.format === 'One-to-One'
                          ? 'bg-[#0f3b2e] text-white border-[#0f3b2e] shadow-sm'
                          : 'bg-white text-[#3a4742] border-[#e7e5dc] hover:bg-neutral-50'
                      }`}
                    >
                      One-to-One
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, format: 'Small Group' })}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-center ${
                        formData.format === 'Small Group'
                          ? 'bg-[#0f3b2e] text-white border-[#0f3b2e] shadow-sm'
                          : 'bg-white text-[#3a4742] border-[#e7e5dc] hover:bg-neutral-50'
                      }`}
                    >
                      Small Group
                    </button>
                  </div>
                </div>

                {/* Age Group */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#3a4742] mb-1.5">
                    Learner Age Group
                  </label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#e7e5dc] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f3b2e] text-[#131b18]"
                  >
                    <option value="Kids (Ages 5-12)">Kids (Ages 5–12)</option>
                    <option value="Teenagers (Ages 13-18)">Teenagers (Ages 13–18)</option>
                    <option value="Adults (18+)">Adults (18+)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3a4742] mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Morning', 'Afternoon', 'Evening'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTime: slot })}
                      className={`py-2 text-xs font-medium rounded-xl border transition-all text-center ${
                        formData.preferredTime === slot
                          ? 'bg-[#c8a261] text-[#0f3b2e] font-bold border-[#c8a261]'
                          : 'bg-white text-[#3a4742] border-[#e7e5dc] hover:bg-neutral-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#3a4742] mb-1.5">
                  Any specific requirements or student background? (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Complete beginner, knows basic Arabic alphabet, flexible weekend timing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 text-sm bg-white border border-[#e7e5dc] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0f3b2e] transition-all resize-none"
                ></textarea>
              </div>

              {/* Trust notice */}
              <div className="flex items-center gap-2 text-xs text-[#6c7d77] pt-1">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero obligations. Your free demo gives you a complete live class preview.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#0f3b2e] hover:bg-[#185a47] text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Confirm & Send via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-[#c8a261] group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
